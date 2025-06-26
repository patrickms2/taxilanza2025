<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\PagosRepositoryInterface;

class PagosController extends Controller
{
    protected PagosRepositoryInterface $pagosRepository;
    protected Request $request;

    public function __construct(PagosRepositoryInterface $pagosRepository, Request $request)
    {
        $this->pagosRepository = $pagosRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->pagosRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="pagos.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_pago','id_servicio',

        'monto',
      'fecha_pago',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_pago'],$row['id_servicio'],

        $row['monto'],
      $row['fecha_pago'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->pagosRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->pagosRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->pagosRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->pagosRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->pagosRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->pagosRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

