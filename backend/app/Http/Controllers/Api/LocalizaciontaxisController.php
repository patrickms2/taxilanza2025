<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\LocalizaciontaxisRepositoryInterface;

class LocalizaciontaxisController extends Controller
{
    protected LocalizaciontaxisRepositoryInterface $localizaciontaxisRepository;
    protected Request $request;

    public function __construct(LocalizaciontaxisRepositoryInterface $localizaciontaxisRepository, Request $request)
    {
        $this->localizaciontaxisRepository = $localizaciontaxisRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->localizaciontaxisRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="localizaciontaxis.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_localizacion','id_taxi','latitud','longitud',

      'ultima_actualizacion',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_localizacion'],$row['id_taxi'],$row['latitud'],$row['longitud'],

      $row['ultima_actualizacion'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->localizaciontaxisRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->localizaciontaxisRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->localizaciontaxisRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->localizaciontaxisRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->localizaciontaxisRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->localizaciontaxisRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

