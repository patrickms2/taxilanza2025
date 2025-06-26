<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\CarpetasRepositoryInterface;

class CarpetasController extends Controller
{
    protected CarpetasRepositoryInterface $carpetasRepository;
    protected Request $request;

    public function __construct(CarpetasRepositoryInterface $carpetasRepository, Request $request)
    {
        $this->carpetasRepository = $carpetasRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->carpetasRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="carpetas.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_doc','id_user','id_dep','nombre','color',
        'privada','favorita',

        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_doc'],$row['id_user'],$row['id_dep'],$row['nombre'],$row['color'],
        $row['privada'],$row['favorita'],

        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->carpetasRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->carpetasRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->carpetasRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->carpetasRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->carpetasRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->carpetasRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

